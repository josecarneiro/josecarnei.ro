import HomeView from "@/views/home";
const ErrorView = () => import(/* webpackChunkName: "error" */ "@/views/error.vue");

export default [
  { path: "/", name: "home", component: HomeView },
  { path: "/error/:status", name: "error", props: true, component: ErrorView },
  { path: "*", redirect: { name: "error", params: { status: 404 } } }
];
