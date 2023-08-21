<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="{{ asset('/js/app.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('../sass/app.scss') }}">
    <title>Document</title>
</head>
<body>
    <div id='root'></div>
</body>
</html>
