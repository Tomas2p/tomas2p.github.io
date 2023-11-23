---
title: "INovel++"
date: "2023-05-18"
description: "Interactive novel by terminal implemented in C++ and using text files for story creation."
tags:
  - C++
  - Game
links:
  - Github: https://github.com/tomas2p/inovel-game
ShowToc: true
---

---

## Constructor

Requirements: `make` and `g++`

```bash
$ make
    rm -f story
    g++ -std=c++17 -Wall -o  story src/story.cpp src/main.cpp
```

---

## Execution Example

```bash
$ ./story stories
    * INovel++ interactive novel *
    There are 1 story available in stories/:   
        [1] - story_template
    Select the story to play >>> 1

    * Mobile Charging : Scene [1-3] *
    adwdfsdd
    You need to charge the mobile phone with the charger.
        [1] - Take the charger from your room.
        [2] - Play Minecraft.
    Choose an option [1-2] >>> 1

    Thanks to someone, your phone hasn't exploded... yet.
    Press Enter to continue...
```

---

## Story Template

With the aim of enabling stories to be created by other users, I offer the template found at stories/template/story_template.txt and its pixel art at stories/template/story_template.art:

```
T.Story Title

E.Scene text 1
#Comment
A.Scene1
+.Advance 1 scene
-.Go back 1 scene
+2.Advance 2 scenes
-2.Go back 2 scenes

F.End of the story
```

And this would be the pixel art file:

```
#PixelArt of the story

A.Scene1
adwdfsdd
qwdqwdqw
dqwdwddw

A.Scene2
```

Where things work as follows:

|    In TXT    |      In TXT      |    In ART    |     In ART     |
| :----------: | :--------------: | :----------: | :------------: |
| Abbreviation |   Explanation    | Abbreviation |  Explanation   |
|      #       |     Comment      |      #       |    Comments    |
|      A       | Pixel art title  |      A       | Pixel art name |
|      T       |   Story title    |
|      E       |      Scene       |
|      +       | Advance 1 scene  |
|      +n      | Advance n scenes |
|      -       | Go back 1 scene  |
|      -n      | Go back n scenes |
|      F       | End of the story |

Empty lines and comments are ignored, '.' is used to separate text from abbreviations.

---

### Non-functional PixelArt

Currently, colors don't work.

For the pixel art mentioned earlier with the 'A' option, you have the following colors available in ANSI format. If you can't see them, your terminal might not support them.

| Abbreviation |     Color      |
| :----------: | :------------: |
|      d       |   dark/black   |
|      r       |      red       |
|      g       |     green      |
|      y       |     yellow     |
|      b       |      blue      |
|      m       | magenta/purple |
|      c       |      cyan      |
|      w       |     white      |

---

### Execution with PixelArt

The cargar_el_movil.txt for that scene is as follows:

```
E.You need to charge the mobile phone with the charger.
A.Scene1
+.Take the charger.
-.Play Minecraft.
```

The cargar_el_movil.art for that scene is:

```
A.Scene1
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
ww                                 ww
ww    ccc                          ww
ww   cccccr       ggg             yww
ww    c c         www        wwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
```

And it would appear as:

```
* Mobile Charging : Scene [1-3] *

 wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
 ww                                 ww
 ww    ccc                          ww
 ww   cccccr       ggg             yww
 ww    c c         www        wwwwwwww
 wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

You need to charge the mobile phone with the charger.
 [1] - Take the charger.
 [2] - Play Minecraft.
Choose an option [1-2] >>> 
```

---
