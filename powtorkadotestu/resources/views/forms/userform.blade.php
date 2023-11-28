<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
@foreach($errors->all() as $errors)
<li>{{$errors}}</li>
@endforeach
<form action="UserFormController" method="get">
        <input type="text" name="firstname" placeholder="podaj imię" autofocus value="{{old('firstname')}}">
        <br><br>
        <input type="text" name="lastname" placeholder="podaj nazwisko" value="{{old('lastname')}}">
        <br><br>
        <input type="submit" value="wyślij formularz">
    </form>
</body>
</html>
