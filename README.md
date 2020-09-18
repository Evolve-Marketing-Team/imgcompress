# Image Compression Install
A command line utility using Node.JS and Gulp to bulk minify images *(JPEG, GIF, PNG, and SVG)*. Node.js will be installed on your machine in order to run a Gulp plugin called, Gulp Imagemin. Below are the steps to get started and install the necessary files. 

## Step 1: Install Node.js
- Go to [https://nodejs.org](https://nodejs.org/en/) and select the LTS version (Recommended for most users) to begin the download. At the time of writing, the current LTS version is at 12.18.4
- Once download is complete, click on the install package to being installation. You can progress to the next steps as the recommended settings are sufficient. 
- You'll be prompted to Automatically install the necessary tools. Ensure this option is checked.
- Once installation is complete, your command shell will open asking to install Python and necessary tools. Press any key to continue install process. *Note this step may take a few minutes. You can continue with other work while this installs*

## Step 2: Install Gulp Cli
Open Powershell as an Adminstrator. If you're not sure how to open Powershell, just click on Windows button and/or search for Powershell select and run as Administrator.
- Enter the following command to enable command line scripts: `Set-ExecutionPolicy Unrestricted`. Once prompted, type *YES* to allow unrestricted process scripts. 
- Install Gulp Cli by entering following command: `npm -g install gulp-cli`
- After this is complete, the rest of the following command line commands can be run in regular Powershell and not as Administrator.


## Step 3: Setup Image Compression
After node installs, you can download the following zip file and download and extract it to your desired location on your machine. This can be done on your Desktop, Documents, or any custom folder within your user directory.

- [Download zip file](https://github.com/alexf-evolve/imgcompress/archive/master.zip) from Evolve Github repo.
- When extracting, Windows will ask you where to extract the files. Delete the `imgcompress-master` portion from the path. This will just duplicte the file path of imgcompress-master and it's not needed. 
- After extraction, open Powershell.
- You'll need to switch to the directory of where you extracted the files. If you extracted the files onto your desktop, you'll run the following command. `cd ~/desktop/imgcompress-master`. You can copy and paste the command into Powershell and hit Enter key.
- Run the following command once you're in the imgcompress-master directory: `npm install`. This will install all the node_modules required.
- After installatin is complete, you'll most likely receive a message about vulnerabilities that you can disregard. 

## Step 4: Run your batch optimization
After the install and setup is complete, you can now run your batch optimization. Optimization works by looking for images in the `originals` folder and outputs the optimized images in the `optimized` folder. 

Note that if you create sub folders, the optimized images will retain the folder structure. For example, if you create a folder in originals called *website-content*, the folder will be created in the `optimized` folder along with the images for better organization.

Once you have your images in place in the `originals` folder, you can run the following command to optimize: `gulp images`. You'll receive a message of how many images were processed and how much savings in file size. You can check the optimzied folder and compare the file sizes.

## Feeling Dangerous?
You can change the settings within the gulpfile.js file. You can change the quality and optimization level for JPEG and PNG. The current settings do have great results but feel free to change the settings. 

Note if after you change the settings and you don't notice a change or the process didn't optimze the images, run the following command: `gulp clear` then run `gulp-images` to reprocess the images. 

~~~ js
	imagemin.mozjpeg({quality: 75, progressive: true}),
	imagemin.optipng({ optimizationLevel: 5 }),
~~~
