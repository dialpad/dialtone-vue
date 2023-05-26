# Dialtone Message Input

**Originally published:** 23-05-2023

**Original author:** Mika Paulasaari

# Overview

The message input component is a wrapper around the Rich Text Editor component
that provides the UI around the editor. It will be built as a separate build
target, similar to the emoji module, so that the core Dialtone bundle size
doesn't increase for the cases where the message input functionality isn't
needed.

## Scope

The first version aims for feature parity with the message input from Dialpad
with the following features initially:

- Plain text input
- URLs as links

### Out of Scope

- Other rich text extension that haven't been implemented yet (emojis, mentions
  etc.)
- Rich text toolbar
- Attachments

# Functional Specification

As a user, I want to:

- Type and edit plain text with line breaks
- See typed URLs as links
- See the input grow in height as I type more text
- Click on the "send" button or press "Enter" to trigger an action
- See an optional helper texts below the input
- See an optional character counter in the input

## UX/UI Designs

The editor will have an outline around it to indicate that is styled slightly
differently depending on the focus state. The editor should have places for
buttons to add attachments and emojis, but these will be not be implemented in
the initial version. The "send" button is built in by default, but it should be
able to be hidden if needed.

More detailed designs can be found
[in this Figma](https://www.figma.com/file/GJiRmWORmDi0zxLJfwn8yp/DP-2.0---Conversation-View?type=design&node-id=0-1&t=vJ5FX4YeCveIqh7s-0) in the "Message input - base" section.

## Build

As mentioned in the overview, we'll build this component in a separate
`messageinput` build target, similar to what we did with the emoji module. This
way the component can be imported explicitly when needed without bloating the
core Dialtone-vue bundle size.

In practice all that needs to be done is to **NOT** export DtMessageInput in the
root level `index.js` where most components are exported at, but instead create
a file at the root level called `messageinput.js` and export the component and
any related files from there:

```js
// dialtone-vue/messageinput.js
export * from './components/message_input';
```

Then in the product the only change is that when the component is imported the
path has to have `/messageinput` at the end.

```js
import { DtMessageInput } from '@dialpad/dialtone-vue/messageinput
```

## Accessibility

The editor component, which contains the actual input element, has proper
accessibility tags set on it, so we should make sure not to duplicate those. For
DtMessageInput need to make sure that any UI we build is accessible by keyboard
and is properly labelled for screenreaders.

## Configurability

The component should support all the features that the DtRichTextEditor does, or
will support in the future. This means that a lot of the configurations and
options that DtRichTextEditor supports will be exposed as props in the
DtMessageInput component.

# Technical Architecture

## DtMessageInput

For inspiration how to implement the component and handle the focus states for
example, I'd suggest looking at the Dialpad
[MessageInput component](https://github.com/dialpad/web-clients/blob/daf4821b8e1fe9325dcab54ae4fadc43f9a7e505/apps/app-core/src/components/MessageInput/MessageInput.vue).

Ignoring the more complex styling and states, a simplified high-level component
structure could look something like this:

```html
<template>
  <div>
    <!-- A purpose-built place to display validation errors -->
    <section v-if="errorMessage">
      <dt-banner kind="error">
        <!-- Probably use a slot to allow links and other non-text content -->
        <slot name="errorMessage" />
      </dt-banner>
    </section>
    <!-- The top level wrapper has the outline styles -->
    <div class="d-fc-black-300 ...">
      <!-- Some wrapper to restrict the height and show the scrollbar? -->
      <div class="d-of-auto ...">
        <dt-rich-text-editor  
          v-model="inputValue"
          ...
        />
      </div>
      <!-- Slot for the middle UI, like the attachment carousel -->
      <slot name="middle">
        <!-- This would be implemented in the future -->
        <dt-attachment-carousel />
      </slot>
      <!-- Section for the bottom UI -->
      <section class="d-d-flex ...">
        <!-- Left content -->
        <div class="d-d-flex ...">
          <slot name="bottomLeft">
            <!-- Slot for other buttons, like emoji picker and attachments -->
          </slot>
        </div>
        <!-- Right content -->
        <div class="d-d-flex ...">
          <!-- Optionally displayed remaining character counter -->
          <p class="d-fc-error">{{ charactersRemaining }}</p>
          <!-- Right positioned UI -->
          <slot name="bottomRight">
            <!-- The default send button is built-in here -->
            <dt-button />
          </slot>
        </div>
      </section>
    </div>
    <!-- These helper texts are technically "outside" of the input element, so
         I'm not sure if we want build them into this component or not... -->
    <section class="d-d-flex ...">
      <div>
        <slot name="bottomLeftAside">
          <!-- These texts do relate to the input though... -->
          <p><strong>{{ contactName }}</strong> is typing...</p>
        </slot>
      </div>
      <div>
        <slot name="bottomRightAside">
          <p><strong>Shift + Return</strong> to add a new line</p>
        </slot>
      </div>
    </section>
  </div>
</template>
```

### Props

The component should support all the features that the DtRichTextEditor does, or
will support in the future. This means that a lot of the configurations and
options that DtRichTextEditor supports will be exposed as props in the
DtMessageInput component. Therefore I think at least
[all the props](../rich_text_editor/rich_text_editor.vue) that
DtRichTextEditor accepts should also be accepted by DtMessageInput and just
passed through:

- `value`
- `editable`
- `inputAriaLabel`
- `inputClass`
- `autoFocus`
- `outputFormat`
- `link`

Any DtMessageInput specific props:

- `maxCharacters`
  - Maximum number of characters that can be typed into the input
- `maxCharactersCounter`
  - At what point start to show the "character's left" counter in the input. In
    the designs is mentioned a use case for SMS, that has a limit of 1500
    characters and the counter shows up when there are 500 characters left.
    Could also be combined with the `maxCharacters` prop also into an array for
    example (`[1500, 500]`).
- `???`

### Emits

Similar to props, the events that are emitted by DtRichTextEditor should be
bubble up by the DtMessageInput component:

- `input`
- `update:value/modelValue`
  - payload: current value in the chosen output format
- `blur`
  - payload: event
- `focus`
  - payload: event

Any DtMessageInput specific emits:

- `???`

## Error Handling

The component needs a way to display validation errors at least. These can be
for example about the size of attachments, or failed uploads of attachments etc.
I don't think the validator logic itself should be built into this component
though, but just the UI to display the error banner.

## Testing

DtRichTextEditor itself has all the tests for the content and interactivity
within the editor, so we shouldn't double test those. What we need to test here
though is the interactivity between the message input and the editor component
as well as the UI that is specific to this component.

One specialty test I think we should add though is the same that
[DtRichTextEditor has](../rich_text_editor/rich_text_editor.test.js#L178) in the
"Build Tests" section, which is to make sure this component is not exported at
the root level with other components.

# Open Questions

- The editor element grows in height automatically. Do we want a `max-height`
  prop or should we just support controlling this by passing DT utils classes
  to the wrapping element, like `d-hmx96`?
- Currently the default behavior of the editor is that "Enter" presses add line
  breaks, but we'll want to disable that and use "Shift+Enter" for line breaks
  and "Enter" will trigger a sending/saving action instead. Here's some
  discussion around how to possibly do that by creating a custom extension to
  listen to keystrokes: https://github.com/ueberdosis/tiptap/issues/2755
