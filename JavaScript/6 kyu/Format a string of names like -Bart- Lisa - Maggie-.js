function list(names){
  //your code here
  const length = names.length;
  switch(true) {
      case length === 0:
        return '';
        break;
      case length === 1:
        return names.map(x => x.name).join('');
        break;
      case length === 2:
        return names.map(x => x.name).join(' & ');
        break;
      default:
        const end = names.pop();
        return `${names.map(x => x.name).join(', ')} & ${end.name}`
  }
}