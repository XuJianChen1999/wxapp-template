// components/FormGroup/index.js
import { MyComponent } from '~/utils/component'

MyComponent({
    props: {
        title: String,
        border: {
            type: Boolean,
            value: true,
        },
        inset: Boolean,
    },
});

