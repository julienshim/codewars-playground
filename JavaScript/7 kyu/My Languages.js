function myLanguages(results) {
  return Object.keys(results)
          .map(key => { return {"language": key, "score": results[key]} })
          .filter(obj => obj.score >= 60)
          .sort((a, b) => b.score - a.score)
          .map(obj => obj.language);
}
