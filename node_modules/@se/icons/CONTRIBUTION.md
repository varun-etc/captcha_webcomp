# SE Icons Generator 

Part of the same repository, the design lab maintain the svg folder to add new icons and generate the new font icons for the every user.
If you want to contribute to the project, be free to fork the repository and make pull request.


## Quick start

We only accept issues that are icon requests, bug reports, or feature requests.
Bugs must be isolated and reproducible problems that we can fix within the FontAwesome core.


## Key branches

- `master` is the latest, deployed version

## Pull requests

- At the moment we are not accepting pull requests containing icons
- Pull requests that do not solve an existing issue are essentially un-prioritized–don't expect these to be addressed quickly
- The files in this repository are generated elsewhere and we do not merge PR's directly into master
- Try not to pollute your pull request with unintended changes–keep them simple and small
- Try to share which browsers your code has been tested in before submitting a pull request


## Env setup

**Icon fonts from the command line.**

Generate cross-browser icon fonts and supporting files (@font-face CSS, etc.)
from a collection of SVGs
[grunt-webfont](https://www.npmjs.com/package/grunt-webfont) Library have been used to generate a collection of RA icon that will be used inside RA.


1. Install [NodeJs](https://nodejs.org/en/)
2. Install [Yarn](https://yarnpkg.com/en/docs/install)

```sh
# On Mac
brew install ttfautohint fontforge --with-python

# On Linux (not tested)
sudo apt-get install zlib1g-dev fontforge
git clone https://github.com/bramstein/sfnt2woff-zopfli.git sfnt2woff-zopfli && cd sfnt2woff-zopfli && make && mv sfnt2woff-zopfli /usr/local/bin/sfnt2woff
git clone --recursive https://github.com/google/woff2.git && cd woff2 && make clean all && sudo mv woff2_compress /usr/local/bin/ && sudo mv woff2_decompress /usr/local/bin/
```

#### Note for windows:

1. Install fontforge: http://fontforge.github.io/en-US/downloads/windows/
   - Install to a path without spaces, eg c:\FontForgeBuilds
   - At the end of the installer check the 'run fontforge' box. It finishes some set up.
1. Add the installation path to your System PATH variable (c:\FontForgeBuilds\bin)

## Install dependencies

From the root of this project, run in a command line:

```
yarn install
```

## Build when new svg icons are added

To build a new library when new icon have been added, simply run:

```
yarn build
```

## Working with tags

A new `tags.json` folder has been added to the project and is being used by the demo generation process to add better tag filtering in the app.

The `tags.json` file is automatically updated when new `svg` files are being added to the svg folder. Few point to note:
- Only tags for existing svg file will be listed. svg that got removed will be automatically removed from the `tags.json` file.
- If the icon already exist in the tags file, the tags for this icon will be kept.
- If the icon does not exist in the tags file, then a new line will be added to `tags.json` file with pre-generated tags based on the icon name. Ex:
    A new icon `action_arrow_download.svg` is added to the `svg` folder, the `tags.json` will be automatically updated with:
    ```json
    {
        ...,
        "action_arrow_download": ["action", "arrow","download"]
    }
- The list of icons in the `tags.json` are re-ordered alphabetically.

**Note :** It is 100% safe to update the `tags.json` file after or before any build. Any tags in the list will remain the same. A line will be removed only if the svg file does not exist (or renamed in that matters).