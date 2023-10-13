import { DtTooltip } from '@/components/tooltip';
import { Portal } from '@linusborg/vue-simple-portal';
const DEFAULT_PLACEMENT = 'bottom';

// const isValidBindingTextValue = (value) => {
//   return value ||
//     (typeof value === 'string' && value.trim()) ||
//     (typeof value === 'object' && value.text.trim());
// };
// const isValidBindingPlacementValue = (value) => {
//   return value ||
//     (typeof value === 'object' && TOOLTIP_DIRECTIONS.includes(value.placement));
// };

export const DtTooltipDirective = {
  name: 'dt-tooltip-directive',
  config: {},
  install (Vue) {
    let currentTooltipId = 1;
    const mountPoint = document.createElement('div');
    mountPoint.id = 'dt-tooltip-directive-app';
    document.body.appendChild(mountPoint);

    const DtTooltipDirectiveApp = new Vue({
      el: mountPoint,
      name: 'DtTooltipDirectiveApp',
      components: { DtTooltip, Portal },
      data () {
        return {
          tooltips: [],
        };
      },

      render (h) {
        return h('div',
          {
            domProps: { id: 'dt-tooltip-directive-app' },
          },
          [
            this.tooltips.map(({ id, vnode, message, placement }) => {
              vnode.data.attrs = { 'data-dt-tooltip-inserted': id };
              // vnode.elm.setAttribute('data-dt-tooltip-inserted', 'true');
              // _removeTooltipDirective(vnode);
              return h('Portal', {
                props: {
                  selector: `[data-dt-tooltip-id="${id}"]`,
                },
              }, [
                h(DtTooltip, {
                  props: { message, placement },
                }, [h('span', { slot: 'anchor' }, [vnode])]),
              ]);
            }),
          ],
        );
      },
    });

    Vue.directive('dt-tooltip', {
      bind (anchor, binding, vnode) {
        if (anchor.hasAttribute('data-dt-tooltip-inserted')) return;
        console.log('bind');
        // if (!isValidBindingTextValue(binding.value)) {
        //   console.warn('Missing value for v-dt-tooltip directive on: ', anchor, 'received value: ', binding.value);
        //   return;
        // }
        // if (!isValidBindingPlacementValue(binding.value)) {
        //   console.warn(
        //     'Wrong placement value provided for v-dt-tooltip directive on: '
        //     , anchor,
        //     'received value: ',
        //     binding.value.placement);
        // }
      },
      inserted: function (anchor, binding, vnode) {
        if (anchor.hasAttribute('data-dt-tooltip-inserted')) return;
        anchor.setAttribute('data-dt-tooltip-inserted', currentTooltipId);
        // if (!isValidBindingTextValue(binding)) return;

        const message = binding.value?.text || binding.value;
        const placement = binding.value?.placement || DEFAULT_PLACEMENT;
        const wrapper = document.createElement('span');
        wrapper.setAttribute('data-dt-tooltip-id', `${currentTooltipId}`);
        anchor.replaceWith(wrapper);

        DtTooltipDirectiveApp.tooltips.push({ id: currentTooltipId, message, placement, vnode });
        currentTooltipId += 1;
      },
    });
  },
};

export default DtTooltipDirective;
