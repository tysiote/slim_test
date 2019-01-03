<?php
use Slim\Container;


class API
{
    private $container = null;

    public function __construct(Container $container = null) {
        $this->container = $container;
    }

    public function login($request) {
        $pdo = $this->container->get("db");
        $users = $pdo->query("SELECT * FROM calendarium")->fetchAll();
        $output = array(
            "events" => $users
        );
        return [$output, 101];
    }
}