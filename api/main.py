#!/usr/bin/python
# -*- coding: utf-8 -*-
import tornado.ioloop
import tornado.web
import json
import jwt
import time

session = {}
class BaseHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept")
        self.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE, OPTIONS')

    # def post(self):
    #     self.write('some post')

    # def get(self):
    #     self.write('some get')

    def get_current_user(self):
        print self.request
        print "="*100
        if self.request.headers.get("Authorization") is   None:
            user=self.get_secure_cookie("token")
        else:
            token=self.request.headers.get("Authorization").split('token=')[1]
            user=self.get_secure_cookie("token",value=token)
        print(user)
        return user

    def options(self):
        # no body
        self.set_status(204)
        self.finish()

class MainHandler(BaseHandler):
    def get(self):
        self.write("Hello, world!")

class LoginHandler(BaseHandler):
    def get(self):

        print self.get_argument('username', '')
        username = self.get_argument('username', '')
        password = self.get_argument('password', '')
        if username == 'admin' and password == '123456':
            payload = {
                        "iss": "John Wu JWT",
                        "iat": int(time.time()),
                        "exp": int(time.time()) + 3600,
                        "user_id":1,
                        "username":"admin"
                        }
            encoded = jwt.encode(payload, 'secret', algorithm='HS256')
            # jwt.decode(encoded, 'secret', algorithms=['HS256'])
            session['1'] = encoded
            print session
            result = {'error_code':0, 'message': 'success', 'token':encoded}
            self.write(json.dumps(result))
        else:
            result = {'error_code':1, 'message': '登录失败，用户名或密码错误！', 'token':''}
            print result
            self.write(json.dumps(result))

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/login", LoginHandler),
    ],
    debug=True
    )

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()