# About // Kata Reversi

Here is the source of the Kata : https://codingdojo.org/kata/Reversi/

### Problem Description

Reversi is a board game for two players. More information can be found on Wikipedia en.wikipedia.org/wiki/Reversi . This Kata is to write a program that takes a current board position together with information about whose turn it is, and returns a list of the legal moves for that player. A move is only legal if it results in at least one of the opponent’s counters being flipped.

Suggested Test Cases

```
........
........
........
...BW...
...WB...
........
........
........
B
```

(A “.” indicates an empty square. A “B” indicates a black piece and a “W” represents a white piece. The trailing “B” indicates that it is black’s turn)

You could either output the possible moves as co-ordinates (columns labelled A - H, rows labelled 1 - 8 starting from top left hand corner) like this: [C5, D6, E3, F4]

or graphically like this:

```
........
........
....0...
...BW0..
..0WB...
...0....
........
........
B
```

### Installation

```bash
git clone https://github.com/Azzerty23/reversi-kata
cd reversi-kata
yarn install
```

### Development

Compile typescript:

```
yarn build [--watch]
```

To launch script:

```
yarn start
```

To execute tests:

```
yarn test [--watch]
```
