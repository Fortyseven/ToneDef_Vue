/* 
    Simple VueJS 2.x touch handler to combine mouse and tap events and that's it.

    Installation:
        import Vue from 'vue';
        import VueSimpleTouch from './utils/vue-simple-touch.js';
 
        Vue.use(VueSimpleTouch);
    
    Usage:
        <element v-touch="[onPressedStart, onPressedEnd]">
        or
        <element v-touch="onPressedStart">    
*/

var vueSimpleTouch = {
    install(Vue, options) {
        var onPressedStart = function(el) {
            if (this.$$onlyTouchStart) {
                this.$$binding.value(el, this);
            } else {
                this.$$binding.value[0](el, this);
            }
        }

        var onPressedEnd = function(el) {
            this.$$binding.value[1](el, this);
        }

        Vue.directive('touch', {
            /* ------------------------------ */
            bind($el, binding) {
                $el.$$binding = binding;

                if (typeof binding.value === 'function') {
                    // Only handling pressed down events
                    $el.$$onlyTouchStart = true;
                    $el.addEventListener('touchstart', onPressedStart);
                    $el.addEventListener('mousedown', onPressedStart);
                } else {
                    // We're being passed both an down and up handler
                    $el.$$onlyTouchStart = false;
                    if (typeof binding.value[0] === 'function') {
                        $el.addEventListener('touchstart', onPressedStart);
                        $el.addEventListener('mousedown', onPressedStart);
                    } else {
                        throw "Pressed start object is not a function";
                    }
                    if (typeof binding.value[1] === 'function') {
                        $el.addEventListener('touchend', onPressedEnd);
                        $el.addEventListener('mouseup', onPressedEnd);
                        $el.addEventListener('mouseleave', onPressedEnd);
                    } else {
                        throw "Pressed end object is not a function";
                    }
                }
            },
            /* ------------------------------ */
            unbind($el) {
                $el.removeEventListener('mouseup');
                $el.removeEventListener('touchend');
                $el.removeEventListener('mousedown');
                $el.removeEventListener('touchstart');
            }
        });
    }
};

module.exports = vueSimpleTouch;