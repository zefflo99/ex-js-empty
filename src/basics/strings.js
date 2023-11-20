/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof needle !== 'String' || typeof haystack !== 'String' || typeof newWord !== 'String') {
      throw new Error("unsupported types");
  }


    const regex = new RegExp(needle, 'gi');




}




