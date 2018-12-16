<script>
export default {
    data(){
        return{
            regex:{
               uniqueID: "^[\\u0621-\\u064A0-9\\u0660-\\u0669\\d]{5,10}$",
               carDescription:"^[a-zA-Z0-9\\s]{10,200}$",
               email:"^[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-zA-Z0-9~!$%^&*_=+}{\\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$",   
               password:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,30}$",
               activationCode:"^[a-z]{1,20}-[a-z]{1,20}-[0-9]{8}$",
               fullname:"^([a-zA-Z]{3,10}(\\s[a-zA-Z]{3,10}){1,2})$"
            }
        }

    }
}
</script>
