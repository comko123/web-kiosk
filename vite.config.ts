import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:[
      {find:"@",replacement:"/src"},
      {find:"@api",replacement:"@/api"},
      {find:"@atom",replacement:"@/atom"},
      {find:"@ProductOption",replacement:"@/components/product_option/ProductOption"},
      {find:"@CountProduct",replacement:"@/components/count_product/CountProduct"},
      {find:"@DefaultOption",replacement:"@/components/default_option/DefaultOption"},
      {find:"@OcBtn",replacement:"@/components/submit_btn/OcBtn"},
      {find:"@Product",replacement:"@/components/product/Product"},
      {find:"@CancleBtn",replacement:"@/components/cancle_btn/CancleBtn"},
      {find:"@BtnList",replacement:"@/components/another_btn/BtnList"},
      {find:"@PhNumber",replacement:"@/components/ph_number/PhNumber"},
      {find:"@DrinkList",replacement:"@/components/drink_list/DrinkList"},
      {find:"@ProductList",replacement:"@/components/product_list/ProductList"},
      {find:"@Summary",replacement:"@/components/summary/Summary"},
      {find:"@SummaryItem",replacement:"@/components/summary_item/SummaryItem"},
      {find:"@MainIndex",replacement:"@/pages/main_section/MainIndex"},
      {find:"@CategoryDrink",replacement:"@/pages/ctg_section/CategoryDrink"},
      {find:"@AllDrink",replacement:"@/pages/all_section/AllDrink"},
      {find:"@Fallback",replacement:"@/pages/fallback_section/FallbackPage"}
    ]
  }
})