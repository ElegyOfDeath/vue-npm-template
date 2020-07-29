import Demo from "./Demo.vue";
(Demo as any).install = (Vue: any) => {
  Vue.components(Demo.name, Demo);
};
export default Demo;
