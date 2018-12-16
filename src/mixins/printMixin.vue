<script>
export default {
    methods:{
         print: function(elem){
                let mywindow = window.open('', 'PRINT', 'height=900,width=900');
                mywindow.document.write('<html><head><title>' + document.title  + '</title>');
                mywindow.document.write('</head><body>');
                mywindow.document.write(document.getElementById(elem).innerHTML);
                mywindow.document.write('</body></html>');

                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/

                mywindow.print();
                mywindow.close();
                return true;
            
        }
    }
}
</script>
