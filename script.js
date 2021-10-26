const data = [
{
  date1: new Date(2017, 0, 1),
  string: "text1" },

{
  date1: new Date(2017, 0, 2),
  string: "text2" },

{
  date1: new Date(2017, 0, 3),
  string: "text3" },

{
  date1: new Date(2017, 1, 1),
  string: "text4" },

{
  date1: new Date(2017, 1, 2),
  string: "text5" }];




const ds = new DevExpress.data.DataSource(data);

// hm... that's disappointing - the standard data source doesn't have
// grouping capabilities at all
ds.load({
  group: [
  {
    selector: "date1",
    groupInterval: "month" }] }).


then(function (res) {
  $("#output").text(JSON.stringify(res, null, 2));
});