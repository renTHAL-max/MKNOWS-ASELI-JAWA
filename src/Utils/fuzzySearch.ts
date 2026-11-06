/**
 * Calculate Levenshtein distance between two strings
 * Returns the minimum number of edits needed to transform one string into another
 */
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[len1][len2];
}

/**
 * Calculate similarity score between two strings (0-1, where 1 is perfect match)
 */
function similarityScore(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;
  
  const distance = levenshteinDistance(str1, str2);
  return 1 - distance / maxLength;
}

/**
 * Fuzzy search function that tolerates typos
 * @param searchTerm - The search query
 * @param targetText - The text to search in
 * @param threshold - Minimum similarity score (0-1). Default 0.6 means 60% match
 * @returns true if match found, false otherwise
 */
export function fuzzyMatch(
  searchTerm: string,
  targetText: string,
  threshold: number = 0.6
): boolean {
  const searchLower = searchTerm.toLowerCase().trim();
  const targetLower = targetText.toLowerCase();

  // Exact substring match (fastest path)
  if (targetLower.includes(searchLower)) {
    return true;
  }

  // Split search term into words
  const searchWords = searchLower.split(/\s+/);
  
  // For each search word, check if there's a similar word in target
  for (const searchWord of searchWords) {
    if (searchWord.length < 3) {
      // For short words, require exact match
      if (!targetLower.includes(searchWord)) {
        return false;
      }
      continue;
    }

    // Split target into words
    const targetWords = targetLower.split(/\s+/);
    
    // Check if any target word is similar to search word
    const foundMatch = targetWords.some((targetWord) => {
      // Check for partial substring match (for long words)
      if (searchWord.length >= 5 && targetWord.includes(searchWord.substring(0, 4))) {
        return true;
      }
      if (targetWord.includes(searchWord)) {
        return true;
      }
      
      // Check fuzzy similarity
      const score = similarityScore(searchWord, targetWord);
      return score >= threshold;
    });

    if (!foundMatch) {
      return false;
    }
  }

  return true;
}

/**
 * Score a match for ranking results
 * Higher score = better match
 */
export function matchScore(searchTerm: string, targetText: string): number {
  const searchLower = searchTerm.toLowerCase().trim();
  const targetLower = targetText.toLowerCase();

  // Exact match gets highest score
  if (targetLower === searchLower) {
    return 1.0;
  }

  // Starts with search term
  if (targetLower.startsWith(searchLower)) {
    return 0.95;
  }

  // Contains exact substring
  if (targetLower.includes(searchLower)) {
    return 0.9;
  }

  // Calculate average similarity of words
  const searchWords = searchLower.split(/\s+/);
  const targetWords = targetLower.split(/\s+/);
  
  let totalScore = 0;
  let wordCount = 0;

  for (const searchWord of searchWords) {
    let bestWordScore = 0;
    for (const targetWord of targetWords) {
      const score = similarityScore(searchWord, targetWord);
      bestWordScore = Math.max(bestWordScore, score);
    }
    totalScore += bestWordScore;
    wordCount++;
  }

  return wordCount > 0 ? totalScore / wordCount : 0;
}
