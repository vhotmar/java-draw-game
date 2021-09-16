# Java - final project - drawing and guessing game
Simplified clone of skribbl.io

## Getting started
You need to run `./gradlew build`. Then you need to have Hazelcast member with
correct class path running. That can be done via running `docker-compose up -d`.

Then next thing you need to do is start the application server. That can be
done via: `./gradlew server:appRun`.

Now you just need to spawn some clients. That can be done via:
`./gradlew gui:run`.

### Usage
The app should be very straightforward to use. When the application start
you should be able to choose a name and click connect.

After connecting you should see an interface with three panels. Left panel
is chat. On the bottom of the chat there is a text field in which you can enter
a message and then press the key ENTER.

On the right you should see list of currently connected players.

In the center you should see the room id and button, which will copy that room
id to your clipboard.

After copying that room id, you can start up another client in which you will
need to enter a name and then check the checkbox saying "Connect to existing
game". After checking that checkbox you should have the possibility of entering
the copied room id.

Now you can click on the connect button.

In the original window should appear a new button "Start Game" (that button
will appear only when there are two or more players present). After clicking
that button one of the players should be asked to choose a word that he will
draw. That player has 10 seconds limit to choose the word, otherwise the word
will be chosen automatically.

Now the player has 50 seconds to draw the word and other players to guess.
After that period, or after everyone has guessed the word next player will be
asked new word and this will repeat indefinitely.

## Middleware extras
In folder `server_test` there are simple tests written in javascript, using the
`protobuf` to communicate via websockets with server.

To run those tests you need to follow the Getting started section (you do not
have to the GUI running).

Now go to the `server_test` and run `npm install` (you need to have node
installed, in the `.nvmrc` I specified that I am using node of version 14,
but any version should work really).

Now you can start the tests via `npm test`.

The tests are located in `./server_test/tests/lobby.test.js`.