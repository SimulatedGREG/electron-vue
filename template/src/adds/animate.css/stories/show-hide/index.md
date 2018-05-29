# Animated.css

https://daneden.github.io/animate.css/

## Example

```html
<transition name="custom-classes-transition"
enter-active-class="animated bounce"
leave-active-class="'animated sideOutLeft">
  <p v-if="!show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
</transition>
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
}
```