/**
 * JavaScript est différent de Rust ou Java, le système de typage est entièrement dynamique.
 * Cela signifie deux choses importantes :
 * - Vous ne pouvez pas préciser les types de variables, les types de paramètres de fonctions et les types de retour,
 *, il n'y a donc aucune garantie que le type que vous attendez soit fourni.
 * Le moteur JavaScript essaiera de faire correspondre les types dynamiquement, vous pouvez donc faire des choses comme
 *  comparer des nombres et des chaînes de caractères, mais en interne, JS fait toujours une conversion de type, ce qui
 * peut conduire à des comportements inattendus
 */

/**
 * @param {number} n
 * @return {boolean} true if n is bigger than 2
 */
export function isBiggerThan2(n) {
  if (isNaN(n)) {
    throw "wrong input"
  }
  return n > 2;
}

/**
 * @param {number} n
 * @param {number} m
 * @return {boolean} true if m is a multiple of n
 */
export function isMult(n, m) {
  if (typeof n !== 'number' || typeof m !== 'number' || isNaN(n) || isNaN(m)) {
    throw new Error("Unsupported types");
  }

  return n % m === 0;
}



