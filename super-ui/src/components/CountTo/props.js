export const countToProps = {
    startVal: {
        type: Number,
        required: false,
        default: 0
    },
    endVal: {
        type: Number,
        required: false,
        default: 2017
    },
    duration: {
        type: Number,
        required: false,
        default: 3000
    },
    autoplay: {
        type: Boolean,
        required: false,
        default: true
    },
    decimals: {
        type: Number,
        required: false,
        default: 0,
        validator(value) {
            return value >= 0;
        }
    },
    decimal: {
        type: String,
        required: false,
        default: '.'
    },
    separator: {
        type: String,
        required: false,
        default: ','
    },
    prefix: {
        type: String,
        required: false,
        default: ''
    },
    suffix: {
        type: String,
        required: false,
        default: ''
    },
    useEasing: {
        type: Boolean,
        required: false,
        default: true
    },
    easingFn: {
        type: Function,
        default(t, b, c, d) {
            return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
        }
    }
};
//# sourceMappingURL=props.js.map