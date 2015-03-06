# jQuery-Alertiny v1.0.0
Tiny plugin to show alert from Bootstrap.

## Options
The following options are supported:
* __extraClass:__ add extra classes to alert div (default = '')
* __closeButton:__ create close button (default = true)
* __fadeEffect:__ add fade effect classes (default = true)

## Examples

```js
// Example #1
$('.alert-container').Alertiny(
  'success', 
  'Example only with alert type and alert message.'
);
```

```js
// Example #2
$('.alert-container').Alertiny(
  'info', 
  'Example with extra classes.', 
  {extraClass: 'example'}
);
```

```js
// Example #3
$('.alert-container').Alertiny(
  'warning', 
  'Example without close button.', 
  {closeButton: false}
);
```

```js
// Example #4
$('.alert-container').Alertiny(
  'danger', 
  'Example without fade effect.', 
  {fadeEffect: false}
);
```

## License
Code released under the MIT license.
