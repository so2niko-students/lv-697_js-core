  
**Практика**

## Morse

  

You have to write a simple [Morse](https://en.wikipedia.org/wiki/Morse_code) code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal [SOS](https://en.wikipedia.org/wiki/SOS) (that was first issued by [Titanic](https://en.wikipedia.org/wiki/Titanic)), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

  

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

Good luck!

  

**Examples:**

  

> decodeMorse('.... . -.-- .--- ..- -.. .') //should return "HEY JUDE"

  

## Знову Саймон

  

Знову Саймон.

Саймон написав код. Саймон впевнений, що код гаразд. Але код не працює. Виправте помилки, допущені Саймоном.

    <!doctype html>
    <html>
    <head>
    <style>
	.blocs>div{
	width: 10px;
	heigth: 20px;
	border: 1px solid grey;
	background-color: bleck;
	}
	</style>
    </head>
    <body>
    <input type="number" class="in">
    <div class="blocs"> </div>
    <script>
    document.querySelector('.in').addEventListener('keyup', function(ev){
    let blocs = document.querySelectorAll('.blocs'),
    count = parseInt(ev.target.innerHTML);
    while(blocs.firstChild){
    blocs.removeChild(blocs.firstChild);
    }
    while(count++){
    blocs.appendChild(document.createElement('div'));
    }
    });
    </script>
    </body>
    </html>
