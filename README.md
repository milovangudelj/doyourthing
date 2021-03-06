# Do Your Thing

A script that installs for me all my programs and packages as well as some system configurations.

## Why?

As a linux user you'll inevitably have to reinstall your OS at some point. Whether it is because you messed up something while tinkering with it and you don't know how to fix it, or because you need more disk space and you placed the partition at the end of the disk, it will happen.
And when that happens you will want to reinstall and setup everything as fast as possible without having to manually type in every single command that you ran throughout your previous run. And for that I present to you my installer script.

## The script

It's long, but simple. It has a couple of useful helper functions (`title()`, `theend()`) for printing pretty output and a function (`dyt()`) that executes your install/config commands.

It's divided into sections:

### - Colors

   I set up some ANSI/VT100 terminal color and control codes as reusable variables (e.g. `GREEN="\033[32m"`)

### - Functions / Counter

   Here you'll find success/fail counter variables along with the aforementioned funcitions' declarations. More on that later.

### - Execution

   This is the boring section. It's just a bunch of calls to `dyt()` with the steps to install/configure everything. The good thing is that you'll have to type this out only once unless you decide to change something later on.

## Funtions

This is the fun part.

### `dyt()`

It accepts two or more arguments, the first being a descriptive title of the operation you're trying to perform and the remaining ones represent a list of commands that you want to execute for that particular operation.

For example, let's say you want to install `Node.js`. This would be the command that you'd put in the file:

```bash
# Node.js
dyt "Node.js (npm)" "dnf module install nodejs:16"
```

For complete automation I would also add in a couple of `dnf` flags like `-q -y -C` to suppress output, accept everything and use chached repo metadata (provided that you updated it beforehand).
Every command passed in is evaluated and depending on its outcome a success or failure counter is updated.
At the end of the script a message will be printed with the two counters color coded for easy access.

### `title()`

It accepts one argument and it prints it as a section title. Useful for easy text formatting on all titles.

```bash
title "Installing packages..."
```

By default it outputs the given text in bold with a couple of new line characters after it.

### `theend()`

It accepts two arguments:

- An optional message to be printed on script completion or termination along with the count of successful and failed installs. If not provided it will default to `"\n${BOLD}* Done! *${RESET}"`

- An optional seed for the message colors that will be passed to [`lolcat`](https://github.com/busyloop/lolcat). If not provided it will default to `175` (a greenish gradient)

```bash
theend "\n${BOLD}* Done! *${RESET}" 175
```

The message will be printed along with the count of successful installs.

![Output example](https://user-images.githubusercontent.com/49202538/173410425-15afdacc-4c1a-42ce-abdc-86bfe83b8f81.png)

### TODO

- [x] Complete the functions documentation
- [x] Make the second `theend()` argument optional
- [ ] Update README to reflect latest changes and implementation in C++
