  // currentWordClean - read the current word without (v), (a), (n), (c)
  export function currentWordClean(c_word) {
    let work = c_word.slice(0, c_word.length - 3);
    work = work.trim();
    return work;
  }//---end of current_word_clean