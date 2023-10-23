import { DtTooltip, TOOLTIP_DIRECTIONS } from '@/components/tooltip';
import { getUniqueString } from '@/common/utils';

export const DtTooltipDirective = {
  name: 'dt-tooltip-directive',
  install (Vue) {
    const mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);

    const DEFAULT_PLACEMENT = 'top';
    const DtTooltipDirectiveApp = new Vue({
      el: mountPoint,
      name: 'DtTooltipDirectiveApp',
      components: { DtTooltip },
      data () {
        return {
          tooltips: [],
        };
      },

      methods: {
        addTooltip (id, message, placement) {
          this.tooltips.push({ id, message, placement });
        },

        removeTooltip (id) {
          this.tooltips = this.tooltips.filter(tooltip => tooltip.id !== id);
        },
      },

      render (h) {
        return h('div',
          {
            domProps: { id: 'dt-tooltip-directive-app' },
          },
          [
            this.tooltips.map(({ id, message, placement, show }) => {
              return h(DtTooltip, {
                key: id,
                props: {
                  message,
                  placement,
                  show,
                  externalAnchor: `[data-dt-tooltip-id="${id}"]`,
                },
              });
            }),
          ],
        );
      },
    });

    const isValidBindingTextValue = (value) => {
      return typeof value === 'string' && value?.trim();
    };
    const isValidBindingPlacementValue = (value) => {
      return value === undefined || TOOLTIP_DIRECTIONS.includes(value);
    };

    Vue.directive('dt-tooltip', {
      bind (anchor, binding) {
        if (!isValidBindingTextValue(binding.value)) {
          // eslint-disable-next-line no-console
          console.warn(
            'Missing value for v-dt-tooltip directive on: ',
            anchor,
            'received value: ',
            binding.value,
          );
          return;
        }
        if (!isValidBindingPlacementValue(binding.arg)) {
          // eslint-disable-next-line no-console
          console.warn(
            'Wrong placement value provided for v-dt-tooltip directive on: '
            , anchor,
            'received value: ',
            binding.arg);
          return;
        }

        const tooltipId = getUniqueString();
        const message = binding.value;
        const placement = binding.arg || DEFAULT_PLACEMENT;

        anchor.setAttribute('data-dt-tooltip-id', tooltipId);
        DtTooltipDirectiveApp.addTooltip(tooltipId, message, placement);
      },
      unbind (anchor) {
        DtTooltipDirectiveApp.removeTooltip(anchor.getAttribute('data-dt-tooltip-id'));
      },
    });
  },
};

export default DtTooltipDirective;
