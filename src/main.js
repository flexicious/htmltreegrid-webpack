const companylist = [{ label: "Company A", state: "NJ", rank: "1.11" },
{ label: "Company B", state: "PA", rank: "11.1" },
{ label: "Company C", state: "CT", rank: "-111" },
{ label: "Company D", state: "NY", rank: "2.34" },
{ label: "Company E", state: "NJ", rank: "22.2" }];

//This can be either an XML string or JS object.


class View {
    itemClick(evt){
        alert("Clicked on " + evt.item.label)
    }
    render(domElement) {
        const gridConfig = {
            width: "800px", height: "400px", editable: true, dataProvider: companylist,
            itemClick: this.itemClick,
            level: {
                columns: [
                    { dataField: "label" },
                    { dataField: "state" },
                    { dataField: "rank", sortNumeric: true }]
            }
        };
        this.grid = new flexiciousNmsp.FlexDataGrid(domElement, {
            configuration: gridConfig
        });
    }
}
new View().render(document.getElementById("app"));