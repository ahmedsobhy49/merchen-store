/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-men":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinh_59.jpg?imwidth=1024&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "hero-image-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinh_50.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240821021706')",
        "t-shirt-men":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/camisetassv_6.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240808152311')",
        "pants-men":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/pantalonessv_2.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240808152311')",
        "dresses-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/vestidosdesktop_2.png?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240821021706')",
        "tops-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/topssv_6.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240808152311')",
        "more-itmes":
          "url('https://r4.wallpaperflare.com/wallpaper/709/359/672/tv-show-breaking-bad-anna-gunn-betsy-brandt-wallpaper-1990589d01ca8d1b560778efe091965d.jpg')",
        "more-items-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/stwdsv_4.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "hero-image-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinVes_127.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "t-shirt-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/appcamisetas_16.png?imwidth=375&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "pants-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/appsudaderas_15.png?imwidth=375&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
      },
      backgroundVideos: {
        "hero-men": "url('./public/assets/videos/homenewindesktop_2.mp4')",
      },
      placeholderColor: ["active"],
    },
  },
  variants: {
    extend: {
      placeholderColor: ["active"],
    },
  },
  plugins: [],
});
