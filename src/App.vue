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
                  <div @click="changeTheme" class="rounded-full col-span-3 p-1 mx-2" :class="bgMainDarkBlue">
                     <div class="rounded-full w-4 h-4" :class="bgKeysRed"></div>
                  </div>
               </div>
            </div>
         </div>

         <!-- screen -->
         <div class="h-24 mr-2 mt-10 rounded-xl p-7 relative overflow-hidden" :class="bgMainVeryDarkBlue">
            <div class="right-7 absolute text-4xl">
               <p>{{ num }}</p>
            </div>
            <div class="text-sm absolute bottom-2">
               <p>{{ history }} {{ operatorValue }}</p>
            </div>
         </div>

         <!-- keys -->
         <div class="mr-2 grid grid-cols-4 p-6 mt-7 rounded-xl gap-x-4 gap-y-5 text-3xl select-none" :class="bgMainDarkBlue">
            <!-- 7 -->
            <div @click="keys(7)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">7</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 8 -->
            <div @click="keys(8)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">8</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 9 -->
            <div @click="keys(9)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">9</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- del -->
            <div @click="del" class="relative text-center text-base cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10 text-white" :class="[bgKeysBlue, textKeysOrange]">DEL</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkBlue"></div>
            </div>

            <!-- 4 -->
            <div @click="keys(4)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">4</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 5 -->
            <div @click="keys(5)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">5</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 6 -->
            <div @click="keys(6)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">6</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- + -->
            <div @click="operator('+')" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">+</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 1 -->
            <div @click="keys(1)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">1</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 2 -->
            <div @click="keys(2)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">2</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 3 -->
            <div @click="keys(3)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">3</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- - -->
            <div @click="operator('-')" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">-</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- . -->
            <div @click="keys('.')" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">.</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- 0 -->
            <div @click="keys(0)" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">0</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- / -->
            <div @click="operator('/')" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">/</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- x -->
            <div @click="operator('x')" class="relative text-center cursor-pointer">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysOrange, textBlue]">x</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkOrange"></div>
            </div>

            <!-- reset -->
            <div @click="reset" class="relative text-center col-span-2 text-base cursor-pointer text-white">
               <p class="h-14 leading-[60px] rounded-lg relative z-10" :class="[bgKeysBlue, textOrange]">RESET</p>
               <div class="h-5 w-full absolute -bottom-1 rounded-lg" :class="bgKeysDarkBlue"></div>
            </div>

            <!-- = -->
            <div @click="operator('=')" class="relative text-center col-span-2 text-base cursor-pointer">
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
         operatorValue: '',
         history: '',
         value: '',
         theme: 'theme3',
         num: '',
      };
   },
   methods: {
      changeTheme: function (e) {
         console.log(e.target);
         e.target.style.transform = 'translateX(20px)';
      },
      operator: function (val) {
         switch (val) {
            case '=':
               if (!this.history) break;
               this.count();
               break;
            case '/':
               if (!this.history) {
                  this.history = this.num;
                  this.operatorValue = val;
                  this.num = '';
               } else {
                  this.count();
                  this.operatorValue = val;
               }
               break;
            case '+':
               if (!this.history) {
                  this.history = this.num;
                  this.operatorValue = val;
                  this.num = '';
               } else {
                  this.count();
                  this.operatorValue = val;
               }
               break;
            case '-':
               if (!this.history) {
                  this.history = this.num;
                  this.operatorValue = val;
                  this.num = '';
               } else {
                  this.count();
                  this.operatorValue = val;
               }
               break;
            case 'x':
               if (!this.history) {
                  this.history = this.num;
                  this.operatorValue = val;
                  this.num = '';
               } else {
                  this.count();
                  this.operatorValue = val;
               }
               break;

            default:
               break;
         }
      },
      count: function () {
         let numberHistory = Number(this.history);
         let numberNum = Number(this.num);

         switch (this.operatorValue) {
            case '/':
               this.history = numberHistory / numberNum;
               this.operatorValue = '';
               this.num = '';
               break;
            case '-':
               this.history = numberHistory - numberNum;
               this.operatorValue = '';
               this.num = '';
               break;
            case '+':
               this.history = numberHistory + numberNum;
               this.operatorValue = '';
               this.num = '';
               break;
            case 'x':
               this.history = numberHistory * numberNum;
               this.operatorValue = '';
               this.num = '';
               break;

            default:
               break;
         }
      },
      keys: function (val) {
         this.num += val;
      },
      reset: function () {
         this.num = '';
         this.value = '';
         this.history = '';
         this.operatorValue = '';
      },
      del: function () {
         if (this.num.length > 0) this.num = this.num.slice(0, -1);
      },
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
