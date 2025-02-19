pipeline {
    agent any

    stages {
        stage('Recuperation du projet') {
            steps {
                git branch: 'main',
                credentialsId: '83f74c11-0512-464f-8f76-76d95cfb89dc',
                url: 'https://github.com/codeangel223/my-sandbox.git'
            }
        }
        stage('Installation des dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}
