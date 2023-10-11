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
  install (Vue, installOptions) {
    const mountPoint = document.createElement('div');
    let currentTooltipId = 1;
    mountPoint.id = 'dt-tooltip-directive-app';
    document.body.appendChild(mountPoint);

    const DtTooltipDirectiveApp = new Vue({
      name: 'DtTooltipDirectiveApp',
      components: { DtTooltip, Portal },
      data () {
        return {
          tooltips: [],
        };
      },

      mounted () {
        console.log(this.$el);
      },

      render (createElement) {
        return createElement('div',
          [
            this.tooltips.map(tooltip => {
              delete tooltip.anchor.data.directives;
              console.log(tooltip.anchor.elm.id);
              return createElement('Portal', {
                selector: tooltip.anchor.elm.id,
              }, [
                createElement(DtTooltip, {
                  parent: tooltip.anchor.parentNode,
                  props: {
                    message: tooltip.message,
                    placement: tooltip.placement,
                  },
                }, [createElement('span', { slot: 'anchor' }, [tooltip.anchor])]),
              ]);
            }),
          ],
        );
      },
    });

    DtTooltipDirectiveApp.$mount(mountPoint);

    Vue.directive('dt-tooltip', {
      bind (anchor, binding) {
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
        // if (!isValidBindingTextValue(binding)) return;

        const message = binding.value?.text || binding.value;
        const placement = binding.value?.placement || DEFAULT_PLACEMENT;
        anchor.id = 'tooltip-directive-' + currentTooltipId++;

        DtTooltipDirectiveApp.tooltips.push({ message, placement, anchor: vnode });

        // const newApp = new Vue({
        //   name: 'DtTooltipDirectiveInstance',
        //   components: { DtTooltip },
        //   data () {
        //     return {
        //       message: binding.value?.text || binding.value,
        //       placement: binding.value?.placement || DEFAULT_PLACEMENT,
        //     };
        //   },
        //
        //   render (createElement) {
        //     delete anchorEl.data.directives;
        //     delete anchorEl.data.hook;
        //
        //     return createElement(DtTooltip, {
        //       props: {
        //         placement: this.placement,
        //         message: this.message,
        //       },
        //     }, [
        //       createElement(anchorEl.tag, {
        //         ...anchorEl.data,
        //         slot: 'anchor',
        //       }, anchorEl.children),
        //     ]);
        //   },
        // });
        //
        // newApp.$mount(anchor);
      },
      unbind () {},
    });
  },
};

export default DtTooltipDirective;
