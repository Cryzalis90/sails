/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index:function(req,res,next){
    Customer.find(req.param('id'),function foundCustomer(err,customers){
      if(err) return next(err);

      return res.view({
        customers:customers
      });
    });
  },
  'new':function (req,res) {
    res.view();
  },

  create:function(req,res,next){
    Customer.create(req.params.all(),function customerCreated(err,customer){
      if(err) return next(err);
      res.redirect('/customer/show/' + customer.id);
    });
  },

  show:function(req,res,next){
    Customer.findOne(req.param('id'),function foundCustomer(err,customer){

      if(err) return next(err);
      if(!customer) return next();
      return res.view({
        customer:customer
      });
    });
  },
  edit:function(req,res,next){
    Customer.findOne(req.param('id'),function foundCustomer(err,customer){

      if(err) return next(err);
      if(!customer) return next();
      return res.view({
        customer:customer
      });
    });
  },
  update:function(req,res,next){
    Customer.update(req.param('id'),req.params.all(),function customerUpdate(err){
      if(err) {
        return res.redirect('customer/edit'+req.param('id'));
      }
      res.redirect('/customer/show/' + req.param('id'));
    });
  },
  destroy:function(req,res,next){
    Customer.destroy(req.param('id')).exec(function(){
      res.redirect('/customer/');
    });
  }

};

