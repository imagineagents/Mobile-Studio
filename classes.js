class Application {
    constructor(){
        this.screens = {};
        this.numberOfScreens = 0;
    }
}


class Screen {
    constructor(id){
        this.id=id;
        this.customProperty= 1;         //example of property;
        this.components = {};
        this.numberOfComponents = 0;
        this.layout = "stackLayout";
        this.style = "";
        
        
    }
}

class Component {
    constructor(id, type){
        this.id = id;
        this.type = type;
        this.specificAttributes = {}
        this.style = "";
        //Specific attributes for specific components
        switch (type){
            case "Label": this.specificAttributes["text"] = "Label";
                break;
                case "Button": this.specificAttributes["text"] = "Button";
                      break;
                  case "TextField": this.specificAttributes["text"] = "TextField";
                      break;
                  case "TextView": this.specificAttributes["text"] = "TextView";
                      break;
                  case "SearchBar": this.specificAttributes["text"] = "SearchBar";
                      break;
                  case "Switch": this.specificAttributes["set"] = true;
                      break;
                  case "Slider": this.specificAttributes["value"] = 0;
                      break;
                  case "Progress": this.specificAttributes["boh"] = 0;      //CHECK OTHER COMPONENTS
                break;
                
        }
    }
}

module.exports = {
    Application,
    Screen,
    Component,
};