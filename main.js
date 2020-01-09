

function init()
{
    var $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");
    var nodeDataArray = [
      /*{key: "Alpha", color:"lime"},
      {key: "Beta", color:"cyan"},
      {key: "Zeta", isGroup:true},
      {key: "Gamma", color: "maroon", group: "Zeta"},
      {key: "Delta", color: "pink", group: "Zeta"},
      */
    ];
    

    var linkDataArray = [];
    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
    //myDiagram.model.addNodeData({key: "added", color: "rgb(205,5,5)"});
    //myDiagram.model.addLinkData({from: "added", to: "Alpha"});

    for(var key in linkDataArray)
    {
        console.log(linkDataArray[key]);
    }
 

   
    node = new Node(myDiagram);

    for(let counter = 0; counter < 100; counter++)
    node.addLinearNodeRandomColor(true);

    console.log(myDiagram.model.nodeDataArray.length);
    linkedList = new LinkedList(myDiagram);
  
    for(var node in myDiagram.model.nodeDataArray)
    {
        linkedList.insertNode(myDiagram.model.nodeDataArray[node]);
    }
    
    myDiagram.model.linkDataArray = linkedList.getLinkDataArray();

    array = myDiagram.model.linkDataArray;
    for(key in array)
    {
        console.log(array[key]);
    }
    myDiagram.nodeTemplate = 
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {fill: "white"},
            new go.Binding("fill", "color")
        ),

        $(go.TextBlock, "text", {margin: 10},
            new go.Binding("text", "key")
        )
    );

  myDiagram.linkTemplate = 
    $(go.Link,
        $(go.Shape,{strokeWidth:3},
            new go.Binding("stroke", "color")
        ),
        $(go.Shape,{toArrow: "Standard", stroke: null},
            new go.Binding("fill", "color")
        )
    );
}