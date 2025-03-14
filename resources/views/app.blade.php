<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Você sente o peso do estresse e das tensões do dia a dia? Seu corpo e sua mente merecem um descanso! Com nossas massagens terapêuticas, você experimenta um profundo estado de relaxamento e bem-estar, melhorando sua qualidade de vida de forma natural e revigorante.">
    <meta name="keywords"
          content="Lévi Saúde Integrada, saúde, bem-estar, médicos, atendimento acessível, massoterapia, relaxamento, terapias, Planaltina, DF, Brasília, Distrito Federal">
    <meta name="author" content="Lévi Saúde Integrada">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


    <title inertia>{{ config('app.name', 'Lévi Saúde Integrada') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <link id="theme-css" href={{asset('/themes/tailwind-light/theme.css')}} rel="stylesheet"></link>
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
