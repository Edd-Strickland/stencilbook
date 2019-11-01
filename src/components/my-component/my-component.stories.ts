export default { title: 'Component' };

export const defaultComponent = () => {
  let myComponent = document.createElement('my-component');
  myComponent.first = "This ";
  myComponent.middle = 'is ';
  myComponent.last = 'Stencil!!! ';

  return myComponent;
};
