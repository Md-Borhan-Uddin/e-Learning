
$("#pptx-player").pptxToHtml({
    pptxFileUrl: "js/hello.pptx", 
    // fileInputId: "pptx",
    slidesScale: "80%", //Change Slides scale by percent
    slideMode: true,
    keyBoardShortCut: true,
    mediaProcess: true, /** true,false: if true then process video and audio files */
    slideModeConfig: {  //on slide mode (slideMode: true)
    first: 1,
    nav: true, /** true,false : show or not nav buttons*/
    navTxtColor: "black", /** color */
    showPlayPauseBtn: true,/** true,false */
    keyBoardShortCut: true, /** true,false */
    showSlideNum: false, /** true,false */
    showTotalSlideNum: false, /** true,false */
    autoSlide: false, /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
    randomAutoSlide: false, /** true,false ,autoSlide:true */ 
    loop: false,  /** true,false */
    background: "black", /** false or color*/
    transition: "fade", /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
    transitionTime: 1 /** transition time in seconds */           
    }
});
