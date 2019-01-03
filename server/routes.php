<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;


require realpath(__DIR__."/..")."\api\API_login.php";
require realpath(__DIR__."/..")."\api\status.php";

// Routes
global $container;
$api = $container["api"];

$app->get('/login', function (ServerRequestInterface $request, ResponseInterface $response, array $args) {
    $this->logger->info("Slim-Skeleton '/' login");
    $data = parseCode($this->api->login($request));
    return $response->withJson($data, $data["status"]["http_code"]);
});

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    $this->logger->info("Slim-Skeleton '/' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});
