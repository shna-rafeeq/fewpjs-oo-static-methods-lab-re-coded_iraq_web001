class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(string){
    let words = string.split(' ');
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    words[0] = this.capitalize(words[0]);
    for (let i = 1; i < words.length; i++) {
      if(!except.find(e => e == words[i])){
         words[i] = this.capitalize(words[i]);
      }
    }
    
    return words.join(' ');
}
}