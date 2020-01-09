
class LinkedList
{
    constructor(myDiagram)
    {
        this.myDiagram = myDiagram;
        this.model = myDiagram.model;
        this.linkDataArray = myDiagram.model.linkDataArray;
        this.nodeDataArray = myDiagram.model.nodeDataArray;
        this.root = null;
    }

    insertNode(node)
    {
        if(this.root == null)
            this.root = node;
        else if(this.nodeDataArray.length > 1)
        {
            console.log("In")
            console.log(this.root.key);
            let lastNode = this.model.findNodeDataForKey(this.root.key);
            this.model.addLinkData({from: node.key, to:lastNode.key});
        }
        this.root = node;
    }
    getLinkDataArray()
    {
        return this.model.linkDataArray;
    }
    
}