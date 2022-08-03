class ProfitCalculator{
    constructor(input,plan){
        this.input = input;
        this.plan = plan;
    }

    profit(){
        var limit = this.checkLimit();
        if(limit != false){
            return {
                "valid":false,
                "message":limit
            }
        }
        var isFixed = this.plan.fixed_amount > 0 ? true : false;
        if(isFixed){
            var amount = this.plan.fixed_amount;
        }else{
            var amount = this.input.val();
        }

        if(this.plan.interest_type == 1){
            var interest = parseFloat(((amount * this.plan.interest) / 100) * this.plan.repeat_time).toFixed(2)
        }else{
            var interest = parseFloat(this.plan.interest * this.plan.repeat_time).toFixed(2)
        }

        var isCapital = false;
        var withCapital = parseFloat(interest);
        if(this.plan.capital_back == 1){
            isCapital = true;
            withCapital += parseFloat(amount);
        }

        return {
            "valid":true,
            "interest":interest,
            "is_capital":isCapital,
            "with_capital":withCapital
        }
    }

    checkLimit(){
        if(this.plan.fixed_amount > 0){
            return false;
        }
        if(parseFloat(this.input.val())<parseFloat(this.plan.minimum)){
            return 'You must have to reach the minimum limit';
        }
        if(parseFloat(this.input.val()) > parseFloat(this.plan.maximum)){
            return 'You have crossed the maximum limit';
        }
        return false;
    }
}