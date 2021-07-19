<template>
   <!-- screen background -->
   <div class="h-screen overflow-hidden font-sans font-bold" :class="[bgMainBlue, textColor]">
      <!-- calculator -->
      <div class="max-w-sm mx-auto py-10">
         <!-- header -->
         <div class="flex justify-between items-center">
            <!-- title -->
            <h1 class="text-4xl">calc</h1>

            <!-- button theme -->
            <div>
               <!-- number -->
               <div class="flex mx-3 text-xs justify-end gap-4 mb-1">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
               </div>

               <!-- toggle -->
               <div class="text-xs grid grid-cols-5 gap-5 items-center">
                  <h2 class="col-span-2">THEME</h2>
                  <div class="rounded-full col-span-3 p-1 mx-2" :class="bgMainDarkBlue">
                     <div class="rounded-full w-4 h-4" :class="bgKeysRed"></div>
                  </div>
               </div>
            </div>
         </div>

         <!-- screen -->
         <div class="h-24 mr-2 mt-10 rounded-xl text-right p-7 text-4xl" :class="bgMainVeryDarkBlue">
            <p>399,981</p>
         </div>

         <!-- keys -->
         <div class="mr-2 grid grid-cols-4 p-6 mt-7 rounded-xl gap-x-4 gap-y-5 text-3xl" :class="bgMainDarkBlue">
            <!-- 7 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">7</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 8 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">8</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 9 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">9</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- del -->
            <div class="relative text-center text-base cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10 text-white" :class="[bgKeysBlue, textKeysOrange]">DEL</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkBlue"></div>
            </div>

            <!-- 4 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">4</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 5 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">5</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 6 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">6</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- + -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">+</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 1 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">1</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 2 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">2</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 3 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">3</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- - -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">-</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- . -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">.</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 0 -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">0</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- / -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">/</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- x -->
            <div class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">x</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- reset -->
            <div class="relative text-center col-span-2 text-base cursor-pointer text-white">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysBlue, textOrange]">RESET</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkBlue"></div>
            </div>

            <!-- = -->
            <div class="relative text-center col-span-2 text-base cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysRed, textKeysOrange]">=</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkRed"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data: () => {
      return {
         theme: 'theme3',
      };
   },
   computed: {
      bgMainBlue: function () {
         return `bg-${this.theme}-main-blue`;
      },
      bgMainDarkBlue: function () {
         return `bg-${this.theme}-main-darkblue`;
      },
      bgMainVeryDarkBlue: function () {
         return `bg-${this.theme}-main-verydarkblue`;
      },
      bgMainDarkBlue: function () {
         return `bg-${this.theme}-main-darkblue`;
      },
      bgKeysRed: function () {
         return `bg-${this.theme}-keys-red`;
      },
      bgKeysDarkRed: function () {
         return `bg-${this.theme}-keys-darkred`;
      },
      bgKeysOrange: function () {
         return `bg-${this.theme}-keys-orange`;
      },
      bgKeysDarkOrange: function () {
         return `bg-${this.theme}-keys-darkorange`;
      },
      bgKeysBlue: function () {
         return `bg-${this.theme}-keys-blue`;
      },
      bgKeysDarkBlue: function () {
         return `bg-${this.theme}-keys-darkblue`;
      },
      textBlue: function () {
         return `text-${this.theme}-text-blue`;
      },
      textKeysOrange: function () {
         return `text-${this.theme}-keys-orange`;
      },
      textOrange: function () {
         return `text-${this.theme}-text-orange`;
      },
      textColor: function () {
         if (this.theme == 'theme1') return 'text-white';
         if (this.theme == 'theme2') return 'text-black';
         if (this.theme == 'theme3') return 'text-theme3-text-blue';
      },
   },
};
</script>
