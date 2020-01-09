
class Node
{
    constructor(myDiagram)
    {
        this.numeric = [1,2,3,4,5,6,7,8,9,0];
        this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        this.counter = 0;
        this.myDiagram = myDiagram;
        this.keyList = [];
    }
    addNode(keyName, userColor)
    {
       this.myDiagram.model.addNodeData({key:keyName , color:userColor});
       this.keyList.push(this.counter);
    }
    addLinearNode(userColor)
    {
        this.myDiagram.model.addNodeData({key:counter, color:userColor});
        this.keyList.push(this.counter);
        this.counter++;
    }
    addLinearNodeRandomColor(randomFlag)
    {
        let definedColor = "rgb(50,100,50)";
        if(randomFlag == true)
        {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            definedColor = "rgb(" + red + ',' + green + ',' + blue + ')';
        }
        this.myDiagram.model.addNodeData({key:this.counter, color:definedColor});
        this.keyList.push(this.counter.toString() + "key");
        this.counter++;
    }
    printKeyList()
    {
        this.keyList.forEach((item)=>
        {
            console.log(item);
        });
    }
    getKeyListLength()
    {
        return this.keyList.length;
    }
    getNodeDataList()
    {
        return this.myDiagram.model.nodeDataArray;
    }

}