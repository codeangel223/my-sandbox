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
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat 'npm run deploy'
                }
            }
        }
    }
    post {
        success {
            emailext subject: 'Deploiement reussi',
             body: 'Le build du jour a été un success 🙏. Url: https://codeangel223.github.io/sandbox',
             recipientProviders: ['codeangel223@gmail.com'],
             to: 'contact@codeangel.pro'
        }
        failure {
            emailext subject: 'Echec du Deploiement',
             body: 'Le build du jour n a pas pu aboutir, veuillez consulter les logs pls.',
             recipientProviders: ['codeangel223@gmail.com'],
             to: 'contact@codeangel.pro'
        }
    }
}
