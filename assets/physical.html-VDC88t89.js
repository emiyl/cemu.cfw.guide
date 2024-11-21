import{_ as n,r as a,o as d,c as s,a as i,b as o,d as l,e as t}from"./app-Ca89HDD3.js";const u={},h={href:"https://www.wiiubru.com/appstore/zips/mocha.zip",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/dimok789/homebrew_launcher/releases/tag/1.4",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/koolkdev/disc2app/releases/latest",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/VitaSmith/cdecrypt/releases/latest",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history",target:"_blank",rel:"noopener noreferrer"},y={href:"http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles",target:"_blank",rel:"noopener noreferrer"};function w(b,e){const r=a("ExternalLinkIcon");return d(),s("div",null,[e[29]||(e[29]=i('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>For this method, we will be dumping a physical disc game to an SD card or USB storage device. This can take some time.</p><p>After dumping, we copy the game over to the PC. Unfortunately, all Wii U disc images are encrypted, which means we need to decrypt them on our PC.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>An SD card for homebrew and dumping</li><li>(Optional) A USB storage device to dump the game to <ul><li>Only required if the game is too big for the SD card</li><li>Wii U games can vary in size up to 17GB, but having 12GB of storage should be okay for most games</li></ul></li></ul><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',6)),o("ul",null,[o("li",null,[e[1]||(e[1]=l("The latest release of ")),o("a",h,[e[0]||(e[0]=l("MochaCFW")),t(r)]),e[2]||(e[2]=o("ul",null,[o("li",null,"This will also work with (Coldboot) Haxchi")],-1))]),e[13]||(e[13]=o("li",null,[l("The Mocha "),o("a",{href:"/assets/files/config.ini"},"config")],-1)),o("li",null,[e[4]||(e[4]=l("The latest release of ")),o("a",p,[e[3]||(e[3]=l("Homebrew Launcher Installer")),t(r)]),e[5]||(e[5]=o("ul",null,[o("li",null,[l("You will need to download the "),o("code",null,"payload.zip"),l(" file")])],-1))]),o("li",null,[e[7]||(e[7]=l("The v1.4 release of ")),o("a",m,[e[6]||(e[6]=l("The Homebrew Launcher")),t(r)]),e[8]||(e[8]=o("ul",null,[o("li",null,[l("You will need to download the v1.4 "),o("code",null,"homebrew_launcher.v1.4.zip"),l(" release of The Homebrew Launcher")])],-1))]),o("li",null,[e[10]||(e[10]=l("The latest release of ")),o("a",f,[e[9]||(e[9]=l("disc2app")),t(r)])]),o("li",null,[e[12]||(e[12]=l("The latest release of ")),o("a",c,[e[11]||(e[11]=l("Cdecrypt")),t(r)])])]),e[30]||(e[30]=i('<h2 id="preparations" tabindex="-1"><a class="header-anchor" href="#preparations" aria-hidden="true">#</a> Preparations</h2><ol><li>Extract the <code>mocha.zip</code> file to the root of your SD card <ul><li>If prompted to, replace any pre-existing files</li></ul></li><li>Extract the <code>homebrew_launcher.v.1.4.zip</code> file to the root of your SD card</li><li>Copy the <code>config.ini</code> file to the <code>/wiiu/apps/mocha</code> folder on your SD card</li><li>Copy the <code>payload.elf</code> file from the <code>payload.zip</code> file to the <code>/wiiu</code> folder on your SD card</li><li>Extract the disc2app <code>.zip</code> file to the root of your Wii U&#39;s SD card</li><li>Double check that you have enough storage space for your game <ul><li>The maximum game size is around 17GB although few games are actually that large</li></ul></li><li>Eject your SD card from Windows and put it into your Wii U console</li><li>Insert your USB storage if you are using one to dump to</li></ol><h2 id="launching-mochacfw" tabindex="-1"><a class="header-anchor" href="#launching-mochacfw" aria-hidden="true">#</a> Launching MochaCFW</h2>',3)),o("ol",null,[e[20]||(e[20]=o("li",null,"Turn on your Wii U console",-1)),e[21]||(e[21]=o("li",null,[l("Launch the internet browser and open "),o("code",null,"wiiuexploit.xyz")],-1)),o("li",null,[e[18]||(e[18]=l("Tap ")),e[19]||(e[19]=o("code",null,"Run Homebrew Launcher!",-1)),o("ul",null,[e[17]||(e[17]=o("li",null,"If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot",-1)),o("li",null,[e[15]||(e[15]=l("Once rebooted, ")),o("a",g,[e[14]||(e[14]=l("reset the browser's save data")),t(r)]),e[16]||(e[16]=l(" and try again"))])])]),e[22]||(e[22]=o("li",null,[l("Once in the Homebrew Launcher, launch MochaCFW "),o("ul",null,[o("li",null,"This should return you back to the Homebrew Launcher")])],-1))]),e[31]||(e[31]=o("h2",{id:"dumping",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#dumping","aria-hidden":"true"},"#"),l(" Dumping")],-1)),o("ol",null,[e[28]||(e[28]=i("<li>Power on your Wii U console</li><li>Ensure your target game disc is <strong>not</strong> inserted in your Wii U</li><li>Open the Homebrew Channel</li><li>Run <code>disc2app</code></li><li>Press <strong>(A)</strong> to dump to the SD card, or <strong>(B)</strong> to dump to your USB storage</li><li>Insert the game disc you&#39;d like to dump when prompted</li><li>The game will now be dumped to <code>\\install\\[TitleID]</code> on your SD/USB device <ul><li>This may take a long time, be patient</li><li>TitleID will be a 16-character string of numbers and letters</li></ul></li><li>Once finished, exit the application and turn off your console</li><li>Remove your SD or USB device from your Wii U and insert it to your computer</li>",9)),o("li",null,[e[25]||(e[25]=l("Copy the ")),e[26]||(e[26]=o("code",null,"\\install\\[TitleID]",-1)),e[27]||(e[27]=l(" folder from your SD or USB device to your Cemu games folder ")),o("ul",null,[o("li",null,[e[24]||(e[24]=l("You can identify your TitleID with the ")),o("a",y,[e[23]||(e[23]=l("Title Database")),t(r)])])])])]),e[32]||(e[32]=i('<h2 id="decrypting" tabindex="-1"><a class="header-anchor" href="#decrypting" aria-hidden="true">#</a> Decrypting</h2><ol><li>Extract the Cdecrypt <code>.zip</code> file to your computer</li><li>Drag and drop your game directory containing the <code>.app</code>, <code>.h3</code> files (amongst other files) onto the <code>cdecrypt.exe</code> executable <ul><li>This may appear as just <code>cdecrypt</code> if you have file extensions disabled</li></ul></li><li>Once done, you can delete all files and folders in the game directory except for the <code>code</code>, <code>content</code> and <code>meta</code> folders</li></ol>',2))])}const T=n(u,[["render",w],["__file","physical.html.vue"]]);export{T as default};