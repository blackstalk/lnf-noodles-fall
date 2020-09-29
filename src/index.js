import Vue from "vue"
import s from "./store"
import Logo from "./components/Logo.vue"
import "./style.css"
import './style.scss';

// Lazy load scripts for components, not routes!
// const coolDiv = document.querySelector("#cool")
// if (coolDiv) import("./components/cool.js")

/* eslint-disable no-new */
new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    Logo
  },
  data: {
    privateState: {},
    sharedState: s.state,
    heroReadMoreBtn: document.querySelector('.hero-read-more'),
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    toggleHeroCopy(){
      let button = document.querySelector('.hero-read-more');
      let container = document.querySelector('.toggle-container');
      if (!container.classList.contains('active')) {
          container.classList.add('active');
          button.classList.add('active');
          container.style.height = 'auto';

          let height = container.clientHeight + "px";

          container.style.height = '0px';

          setTimeout(function () {
              container.style.height = height;
          }, 0);
      } else {
          container.style.height = '0px';

          container.addEventListener('transitionend', function () {
              container.classList.remove('active');
              button.classList.remove('active');
          }, {
              once: true
          });
      }
    },
    
  }
})
/* eslint-enable */
