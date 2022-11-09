

//json dynamic import 불가로 임시방안
function findResourceByIndex(index: number) {
    switch (index) {
      case 0:
        return require("./123760-cat-sneaking.json");
      case 1:
        return require("./123760-cat-sneaking.json");
      case 2:
        return require("./123760-cat-sneaking.json");
      case 3:
        return require("./123760-cat-sneaking.json");
      case 4:
        return require("./123760-cat-sneaking.json");
      default:
        throw new DOMException(`리소스가 존재하지 않습니다 index : ${index}`)  
    }
}

export const useRepository = () => (index : number) : unknown => findResourceByIndex(index)

