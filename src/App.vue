<template>
   <!-- screen background -->
   <div class="h-screen overflow-hidden bg-theme1-main-blue font-sans font-bold text-white">
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
                  <div class="bg-theme1-main-darkblue rounded-full col-span-3 p-1 mx-2">
                     <div class="bg-theme1-keys-red rounded-full w-4 h-4"></div>
                  </div>
               </div>
            </div>
         </div>

         <!-- screen -->
         <div class="h-24 bg-theme1-main-verydarkblue mr-2 mt-10 rounded-xl text-right p-7 text-4xl">
            <p>399,981</p>
         </div>

         <!-- keys -->
         <div class="mr-2 bg-theme1-main-darkblue grid grid-cols-4 p-6 mt-7 rounded-xl gap-x-4 gap-y-5 text-3xl">
            <!-- 7 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">7</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 8 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">8</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 9 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">9</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- del -->
            <div class="relative text-center text-base cursor-pointer">
               <p class="bg-theme1-keys-blue h-14 leading-[60px] rounded-lg text-theme1-keys-orange relative z-10">DEL</p>
               <div class="bg-theme1-keys-darkblue h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 4 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">4</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 5 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">5</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 6 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">6</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- + -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">+</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 1 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">1</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 2 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">2</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 3 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">3</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- - -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">-</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- . -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">.</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- 0 -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">0</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- / -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">/</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- x -->
            <div class="relative text-center cursor-pointer">
               <p class="bg-theme1-keys-orange h-14 leading-[60px] rounded-lg text-theme1-text-blue relative z-10">x</p>
               <div class="bg-theme1-keys-darkorange h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- reset -->
            <div class="relative text-center col-span-2 text-base cursor-pointer">
               <p class="bg-theme1-keys-blue h-14 leading-[60px] rounded-lg text-theme1-text-orange relative z-10">RESET</p>
               <div class="bg-theme1-keys-darkblue h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>

            <!-- = -->
            <div class="relative text-center col-span-2 text-base cursor-pointer">
               <p class="bg-theme1-keys-red h-14 leading-[60px] rounded-lg text-theme1-keys-orange relative z-10">=</p>
               <div class="bg-theme1-keys-darkred h-5 w-full absolute -bottom-1 rounded-lg"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script></script>
